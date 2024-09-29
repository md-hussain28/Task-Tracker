import { styled } from '@mui/system';
import { Paper } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2),
  backgroundColor: alpha(theme.palette.background.paper, 0.8),
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0 8px 32px 0 ${alpha(theme.palette.common.black, 0.37)}`,
  transition: theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 12px 48px 0 ${alpha(theme.palette.common.black, 0.5)}`,
  },
}));

export default StyledPaper;
