import { Box, useTheme } from '@mui/material';
import { FC } from 'react';
import { tokens } from '../../theme';

interface IProgressCircleProps {
  progress?: number;
  size?: number;
}
const ProgressCircle: FC<IProgressCircleProps> = ({ progress, size }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = Number(progress) * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
              conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
              ${colors.greenAccent[500]}`,
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

ProgressCircle.defaultProps = {
  progress: 0.75,
  size: 40,
};

export default ProgressCircle;
