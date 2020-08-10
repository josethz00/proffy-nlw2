import React, { useState, useEffect } from 'react';


import styles from './styles';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from "react-native-gesture-handler";
import api from '../../services/api';

const Landing: React.FC = ()=>{

    const { navigate } = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const total = response.data;

            setTotalConnections(total);
        })
    }, []);  

    function handleNavigateToGiveClassesPage(){
        navigate('GiveClasses');
    }
    function handleNavigateToStudyPages(){
        navigate('StudyTabs');
    }

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/images/landing.png')} style={styles.banner}/>
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}></Text>  
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigateToStudyPages}>
                    <Image source={require('../../assets/images/icons/study.png')} />
                    <Text style={styles.buttonText}>
                        Estudar
                    </Text>
                </RectButton>
                <RectButton style={[styles.button, styles.buttonSecondary]} onPress={handleNavigateToGiveClassesPage}>
                    <Image source={require('../../assets/images/icons/give-classes.png')} />
                    <Text style={styles.buttonText}>
                        Dar aulas
                    </Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas{" "}
                <Image source={require('../../assets/images/icons/heart.png')} />
            </Text>
        </View>
    );
};


export default Landing;