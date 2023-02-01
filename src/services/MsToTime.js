import dayjs from "dayjs"

export function mstoTime(duration) {
        let hours = dayjs.unix(duration).hour();
        let minutes = dayjs.unix(duration).minute();
        const ampm = hours >= 12 ? "pm" : "am";
        hours %= 12;
        hours = hours || 12;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
    
        const strTime = `${hours}:${minutes} ${ampm}`;
        return strTime;
      }