import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Box, 
  Typography,
} from '@mui/material';
import { 
  Add as AddIcon, 
  List as ListIcon, 
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledListItem = styled(ListItem)<{ active: number }>(({ theme, active }) => ({
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  backgroundColor: active ? theme.palette.action.selected : 'transparent',
  '&:hover': {
    backgroundColor: active ? theme.palette.action.selected : theme.palette.action.hover,
  },
}));

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { text: 'Add Task', icon: <AddIcon />, path: '/add-task' },
    { text: 'Task List', icon: <ListIcon />, path: '/task-list' },
    { text: 'Project Overview', icon: <DashboardIcon />, path: '/project-overview' },
  ];

  return (
    <Box sx={{ width: 250, height: '100%', overflow: 'auto' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <AssignmentIcon color="primary" fontSize="large" />
        <Typography variant="h6" color="primary">
          Task Manager
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {menuItems.map((item) => (
          <StyledLink to={item.path} key={item.text}>
            <StyledListItem active={location.pathname === item.path ? 1 : 0}>
              <ListItemIcon sx={{ color: location.pathname === item.path ? 'primary.main' : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  color: location.pathname === item.path ? 'primary.main' : 'inherit',
                }}
              />
            </StyledListItem>
          </StyledLink>
        ))}
      </List>
      <Divider sx={{ mt: 2 }} />
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" color="text.secondary">
          © 2023 Task Manager
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
