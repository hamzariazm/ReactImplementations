import { Routes, Route } from 'react-router-dom';
import UseImperativeHandleExample from '../components/UseImperativeHandle/UseImperativeHandleExample';
import UseReducerExample from '../components/UseReducer/UseReducer';
import UseCallbaclExample from '../components/UseCallback/UseCallback';
import Forms from '../components/Forms/Forms';
import FilterableList from '../components/StateUplifting/StateUplifting';
import Parent from '../components/ComponentsAndProps/Parent';
import ConditionalRendering from '../components/ConditionalRendering/ConditonalRendering';
import EventHandlers from '../components/EventHandlers/EventHandlers';
import UseStateExample from '../components/useState/useState';
import UseEffectExample from '../components/UseEffect/useEffectExample';
import UseRefExample from '../components/UseRef/UseRefExample';
import UseMemoExample from '../components/UseMemo/UseMemoExample';
import Home from '../components/Home/Home';
import Navigationbar from '../components/Navbar/Navbar';
import Counter from '../components/ReduxCounter/Counter';
import ProtectedRoute from './ProtectedRoutes';

const AppRoutes = () => {
    return(
        <>
            <Routes>
                <Route path='' element={<Navigationbar/>}>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/componentsandprops' element={<Parent/>}></Route>
                    <Route path='/eventhandlers' element={<EventHandlers/>}></Route>
                    <Route path='/conditionalrendering' element={<ConditionalRendering/>}></Route>
                    <Route path='/forms' element={<Forms/>}></Route>
                    <Route path='/stateuplifting' element={<FilterableList/>}></Route>
                    <Route path='/usecallback' element={<UseCallbaclExample/>}></Route>
                    <Route path='/useeffect' element={<UseEffectExample/>}></Route>
                    <Route path='/imperativehandler' element={<UseImperativeHandleExample/>}></Route>
                    <Route path='/usememo' element={<UseMemoExample/>}></Route>
                    <Route path='/usereducer' element={<UseReducerExample/>}></Route>
                    <Route path='/useref' element={<UseRefExample/>}></Route>
                    <Route path='/usestate' element={<UseStateExample/>}></Route>
                    <Route path='/counter' element={
                        <ProtectedRoute>
                            <Counter/>
                        </ProtectedRoute>
                    }>
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes;