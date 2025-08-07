import { useEffect, useState, useRef, useCallback } from 'react';
import { Box, List, Divider } from '@mui/material';
import dayjs from 'dayjs';
import axios from 'axios';
import { useMount } from 'ahooks';
import { GitHubSearchResponse, ITrendingItem } from '@/types';
import { LoadingSpinner } from '@/components/element';
import TrendingListItem from './components/TrendingListItem';

const createdDate = dayjs().subtract(10, 'day').format('YYYY-MM-DD');

const TrendingList = () => {
  const isFetchingRef = useRef(false);
  const lastItemRef = useRef<HTMLDivElement | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [trendingList, setTrendingList] = useState<ITrendingItem[]>([]);
  const [paginationOption, setPaginationOption] = useState({ page: 1, hasMore: true });

  const fetchData = useCallback(
    async (page: number) => { 
      if (isFetchingRef.current) return;
      isFetchingRef.current = true;
      setLoading(true);
      let totalTrendingList = [];
      let newPaginationOption = { page, hasMore: paginationOption.hasMore };

      try {
        const response = await axios.get<GitHubSearchResponse>('https://api.github.com/search/repositories', {
          params: {
            q: `created:>${createdDate}`,
            sort: 'stars',
            order: 'desc',
            page,
          },
        });
    
        const { total_count, items: newTrendingList } = response.data;
        totalTrendingList = page === 1 ? newTrendingList : [...trendingList, ...newTrendingList];
        newPaginationOption.hasMore = total_count > totalTrendingList.length;

      } catch (err: any) {
        alert(err?.message || 'Please contact our IT Support.');
        newPaginationOption.hasMore = false;
      } finally {
        isFetchingRef.current = false;
        setLoading(false);
        setTrendingList(totalTrendingList);
        setPaginationOption(newPaginationOption);
      }
    }, [trendingList, paginationOption, setLoading, setTrendingList, setPaginationOption]
  );

  useMount(() => {
    fetchData(1);
  });
  
  useEffect(() => {
    const target = lastItemRef.current;
  
    if (!target) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading && paginationOption.hasMore) {
          const newPage = paginationOption.page + 1;
          fetchData(newPage);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );
  
    observer.observe(target);
  
    return () => {
      if (target) observer.unobserve(target);
    };
  }, [loading, paginationOption.hasMore, paginationOption.page, fetchData]);  
  
  return (
    <List>
      {trendingList.map((item, index) => {
        const isLastElement = index === trendingList.length - 1;
        return (
          <Box ref={isLastElement ? lastItemRef : null} key={item.id}>
            <TrendingListItem data={item} />
            {!isLastElement && <Divider />}
          </Box>
        )
      })}
      {loading && <LoadingSpinner />}
    </List>
  );
};

export default TrendingList;
