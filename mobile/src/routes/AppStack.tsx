import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/Landing';
import GiveClasses from '../screens/GiveClasses';
import StudyTabs from './StudyTabs';


const { Navigator, Screen } = createStackNavigator();

const AppStack : React.FC = ()=>{
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="StudyTabs" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;