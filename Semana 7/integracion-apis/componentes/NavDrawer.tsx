import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/Home';
import Maestros from '../pages/Maestros';
import AgregarMaestro from '../pages/AgregarMaestro';
import EditarMaestro from '../pages/EditarMaestro';
import Clases from '../pages/Clases';
import AsignarClase from '../pages/AsignarClase';
import BuscarMaestros from '../pages/BuscarMaestros';

export default function NavDrawer() {

    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Maestros" component={Maestros} />
                <Drawer.Screen name="AgregarMaestro" component={AgregarMaestro} />
                <Drawer.Screen name="EditarMaestro" component={EditarMaestro} />
                <Drawer.Screen name="Clases" component={Clases} />
                <Drawer.Screen name="AsignarClase" component={AsignarClase} />
                <Drawer.Screen name="BuscarMaestros" component={BuscarMaestros} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
