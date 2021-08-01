export const formatTime = (arg) => {
  if(!arg || typeof(arg) !== 'number' || arg < 0){
    return null;
  }


  let seconds = Math.floor(arg%60).toString();
  let minutes = Math.floor((arg/60)%60).toString();
  let hours = Math.floor(arg/3600).toString();

  if(seconds.length <= 9 || minutes.length <= 9 || hours.length <= 9){
    return (hours.padStart(2, '0') + ':' + minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0'));
  } else {
    return (hours + ':' + minutes + ':' + seconds);
  }
};