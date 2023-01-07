import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  app: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentWrapper: {
    height: '150px',
    padding: '70px',
    borderRadius: '40px',
    backgroundColor: '#FBCEB1',
    display: 'flex',
    alignItems: 'center'
  },

  counter: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '70px',
    fontWeight: 'bold',
    color: 'rgb(25, 22, 22)',
    marginBottom: '15px',
  },
  btnGroup:{
    '& button':{
      marginRight:'15px'
    }
  }

})


function App() {
  const classes = useStyles()
  const [count, setCount] = useState(0)
  const plus = () => {
    setCount(count + 1)
  }
  const minus = () => {
    setCount(count - 1)
  }
  return (
    <div className={classes.app}>
      <div className={classes.contentWrapper}>
        <div>
          <div className={classes.counter}>{count}</div>
          <div className={classes.btnGroup}>
            <Button variant='contained' color="secondary" onClick={minus}>минус</Button>
            <Button variant='contained' color='success' onClick={plus}>плюс</Button>
            <Button onClick={()=>setCount(0)} variant='contained'>сброс</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
