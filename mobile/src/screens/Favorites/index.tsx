import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

import { View, ScrollView } from 'react-native';
import TeacherItem, { Teacher } from '../../components/TeacherItem'

const Favorites : React.FC = ()=>{

    const [favorites, setFavorites] = useState([]);

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response=>{
            if(response){
                const favoritedTeachers = JSON.parse(response);
                setFavorites(JSON.parse(favoritedTeachers));
            }
        });
    }

    useFocusEffect(()=>{
        React.useCallback(() => {
            loadFavorites();
        }, [])
    });

    return(
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" />
            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 20
            }}>
                {favorites.map((teacher: Teacher)=>{
                    return (
                        <TeacherItem key={teacher.id} teacher={teacher} favorited />
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default Favorites;