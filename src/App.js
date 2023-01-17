// import logo from './logo.svg';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import CounterTwo from './components/CounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ErrorBoundary from './components/ErrorBoundary';
// import Hero from './components/Hero';
// import PortalsDemo from './components/PortalsDemo';

// import RefsDemo from './components/RefsDemo';
// import ParentComp from './components/ParentComp';
// import Table from './components/Table';
// import FragmentDemo from './components/FragmentDemo';
// import Form from './components/Form';
// import Lifecycle from './components/Lifecycle';
// import Inline from './components/Inline';
// import NameList from './components/NameList';
// import UserGreeting from './components/UserGreeting';
// import ChildComponent from './components/ChildComponent';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import ClassClick from './components/ClassClick';
// import Counter from './components/Counter';
// import Carry from './components/Carry'
// import Join from './components/Join';
// import Withjsx from './components/Withjsx';
// import Message from './components/Message';
// import FunctionClick from './components/FunctionClick';
// import Stylesheet from './components/Stylesheet';
// import './appStyles.css'
// import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <UserProvider value="Samson" >
      <ComponentC />
      </UserProvider>
     {/* <CounterTwo>
    {(count, incrementCount) => (
    <ClickCounterTwo 
     count={count} incrementCount = {incrementCount}/>  
      )}
      Way Two
     </CounterTwo>
     <CounterTwo>
    {(count, incrementCount) => (
    <HoverCounterTwo 
     count={count} incrementCount = {incrementCount}/>  
      )}
      Way Two
     </CounterTwo> */}
   
       {/* <CounterTwo render = {(count, incrementCount) => (
    <HoverCounterTwo 
     count={count} incrementCount = {incrementCount}/>  
     Way One
      )}/> */}
      {/* <ClickCounterTwo />/
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Samson' : 'Guest'}/> */}
      {/* <ClickCounter name='Samson'/>
      <HoverCounter />  */}
   {/* <ErrorBoundary>
   <Hero heroName="Batman"></Hero>
   </ErrorBoundary>
   <ErrorBoundary>
      <Hero heroName="SuperMan"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"></Hero>
   </ErrorBoundary>  */}
{/* <PortalsDemo /> */}
      {/* <RefsDemo /> */}
    {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo />  */}
      {/* <Lifecycle /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
    {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <ChildComponent /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
     {/* <Carry name="Dan" heroname="Jaja" /> */}
     {/* <Carry name="Reece" heroname="Kala">
      <p>This is Children props</p>
     </Carry> */}
     {/* <Carry name="Bob" heroname="Daju">
      <button>Live Show</button>
     </Carry> */}
     {/* <Join  name="Dan" heroname="Jaja"/>
     <Join  name="Reece" heroname="Kala"/> */}
     {/* <Join name="Bob" heroname="Daju"/> */}
     {/* <Withjsx /> */}
    </div>
  );
}

export default App;
