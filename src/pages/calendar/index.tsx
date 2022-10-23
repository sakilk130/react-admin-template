import { Box, useTheme } from '@mui/material';
import moment from 'moment';
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from '../../components/header';
import { tokens } from '../../theme';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const colors = tokens(theme.palette.mode);
  const [eventsData, setEventsData] = useState<any>([]);

  const handleSelect = ({ start, end }: any) => {
    // eslint-disable-next-line no-alert
    const title = window.prompt('New Event name');
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title,
        },
      ]);
  };
  return (
    <Box m="20px">
      <Header title="Calendar" subTitle="Full Calendar Interactive Page" />

      <Box flex="1 1 100%" ml="15px">
        <Calendar
          views={['day', 'agenda', 'work_week', 'month']}
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={eventsData}
          style={{ height: '75vh' }}
          // eslint-disable-next-line no-alert
          onSelectEvent={(event: any) => alert(event.title)}
          onSelectSlot={handleSelect}
        />
      </Box>
    </Box>
  );
};

export default CalendarPage;
