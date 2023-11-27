'use client'
import React from 'react'
import { 
    Button,
} from 'react-native'
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
    // ...

    return (
        <MainLayout>
            <Text>Hi, my name is Matthew Simms.</Text>
            <Text>I like cars, programming and camping</Text>
             <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
        </MainLayout>
    );
}

export default AboutScreen