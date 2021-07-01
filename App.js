import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//importar componentes
import NuevaOrden from './views/NuevaOrden';
import DetallePlatillo from './views/DetallePlatillo';
import Formulario from './views/Formulario';
import Menu from './views/Menu';
import ProgresoPedido from './views/ProgresoPedido';
import ResumenPedido from './views/ResumenPedido';


//importar state de context
import FirebaseState from './context/firebase/firebaseState';



const Stack = createStackNavigator();

const APP = () => {
  return (  
    <>
    <FirebaseState>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle:{
                backgroundColor:'#FFDA00'
              },
              headerTitleStyle:{
                fontWeight:'bold'
              }
            }}
          >
            <Stack.Screen
              name="NuevaOrden"
              component={NuevaOrden}
              options={{
                title:"Nueva Orden"
              }}
            />

            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{
                title:"Nuestro Menú"
              }}
            />

            <Stack.Screen
              name="DetallePlatillo"
              component={DetallePlatillo}
              options={{
                title:"Detalle Platillo"
              }}
            />

            <Stack.Screen
              name="Formulario"
              component={Formulario}
              options={{
                title:"Ordenar Platillo"
              }}
            />
            <Stack.Screen
              name="ResumenPedido"
              component={ResumenPedido}
              options={{
                title:"Resumen Pedido"
              }}
            />
            <Stack.Screen
              name="ProgresoPedido"
              component={ProgresoPedido}
              options={{
                title:"Progreso de Pedido"
              }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </FirebaseState>
    </>

  );
}
 
export default APP;
