
import { memo } from 'react';
import { 
  Box, 
  Typography, 
  Avatar, 
  ListItemText,
  ListItem,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { ITrendingItem } from '@/types';
import { displayAbbreviateNumber } from '@/utils';

interface Props {
  data: ITrendingItem,
}

const TrendingListItem = ({
  data,
}: Props) => {
  return (
      <ListItem>
        <ListItemText
          primary={
            <Typography variant="h6" fontWeight="bold">
              {data?.name || ''}
            </Typography>
          }
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                color="text.primary"
              >
                {data?.description || '--'}
              </Typography>
              <Box display="flex" justifyItems="center" justifyContent="space-between" mt={1}>
                <Box display="flex" alignItems="center">
                  <Avatar alt="TensorFlow" src={data?.owner?.avatar_url} sx={{ width: 24, height: 24 }} />
                  <Typography variant="body2" color="black" ml={0.5}>{data?.full_name || ''}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <StarIcon fontSize="small" style={{ color: 'black' }} />
                  <Typography variant="body2" color="black" ml={0.5}>
                    {displayAbbreviateNumber(data?.stargazers_count)}
                  </Typography>
                </Box>
              </Box>
            </>
          }
        />
      </ListItem>
  )
}

export default memo(TrendingListItem);