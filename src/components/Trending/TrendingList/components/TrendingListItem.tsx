
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
          <div className="baby">
            <Typography
              component="span"
              variant="body2"
              color="text.primary"
            >
              {data?.description || '--'}
            </Typography>
            <Box
              component="div"
              display="flex"
              justifyContent="space-between"
              mt={1}
            >
              <Box component="div" display="flex" alignItems="center">
                <Avatar
                  alt={data?.owner?.login || 'Owner'}
                  src={data?.owner?.avatar_url}
                  sx={{ width: 24, height: 24 }}
                />
                <Typography
                  component="span"
                  variant="body2"
                  color="text.secondary"
                  ml={0.5}
                >
                  {data?.full_name || ''}
                </Typography>
              </Box>
              <Box component="div" display="flex" alignItems="center">
                <StarIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                <Typography
                  component="span"
                  variant="body2"
                  color="text.secondary"
                  ml={0.5}
                >
                  {displayAbbreviateNumber(data?.stargazers_count)}
                </Typography>
              </Box>
            </Box>
          </div>
        }
        slotProps={{
          secondary: {
            component: 'span',
          },
        }}
      />
    </ListItem>
  )
}

export default memo(TrendingListItem);