# Carbon App

Aplicación móvil desarrollada en React Native que permite visualizar operaciones financieras con su respectivo **Carbon Score**, una métrica que indica el impacto ambiental de cada transacción.

## Credenciales de Prueba

Para acceder a la aplicación, utiliza las siguientes credenciales:

- **Email:** `test@carbon.com`
- **Password:** `carbon123`

## Setup Inicial

### Requisitos previos

- Node.js >= 20
- Yarn
- Android Studio con emulador configurado

### Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
yarn install
```

3. Ejecutar la aplicación:

```bash
yarn android
```

## Estructura de Carpetas

```
src/
├── assets/           → Recursos estáticos (imágenes, logo)
├── context/          → Context global de la aplicación
│   └── user/         → Manejo del estado del usuario autenticado
├── global/           → Componentes y estilos reutilizables
│   ├── components/   → Componentes genéricos (Button, Text, Loading)
│   └── styles/       → Estilos globales y colores
└── screens/          → Pantallas de la aplicación
    ├── login/        → Pantalla de inicio de sesión
    ├── home/         → Lista de operaciones
    ├── homeDetail/   → Detalle de una operación
    └── navigation/   → Configuración de navegación
```

### Estructura interna de cada pantalla

Cada pantalla sigue una estructura consistente:

```
screen/
├── components/       → Componentes específicos de la pantalla
├── context/          → Context local (si aplica)
├── hooks/            → Custom hooks de la pantalla
├── services/         → Llamadas a servicios/API
├── interface/        → Tipos e interfaces TypeScript
├── screen.tsx        → Componente principal
└── styles.ts         → Estilos de la pantalla
```

## Patrones Implementados

### Context API
Se utiliza React Context para el manejo de estado:
- **UserContext**: Almacena la información del usuario autenticado de forma global
- **HomeContext**: Maneja el estado de las operaciones a nivel local de la pantalla

### Custom Hooks
La lógica de negocio está separada en hooks personalizados:
- `useLogin`: Validación de credenciales y proceso de autenticación
- `useHome`: Obtención y manejo de operaciones
- `useHomeDetail`: Formateo de datos y lógica del detalle

### Services
Capa de servicios que encapsula las llamadas a la API:
- Simulación de respuestas con datos mock
- Validación de tokens
- Manejo de AsyncStorage para persistencia

### Componentes Reutilizables
Componentes genéricos con props personalizables:
- `ButtonCustom`: Botón estilizado
- `TextCustom`: Texto con colores y estilos predefinidos
- `Loading`: Indicador de carga

### TypeScript
Tipado estricto en toda la aplicación:
- Interfaces para props de componentes
- Types para respuestas de servicios
- Tipado en navegación

## Ventajas de esta Arquitectura

1. **Separación de responsabilidades**: Cada archivo tiene una función específica, lo que facilita encontrar y modificar código.

2. **Código reutilizable**: Los componentes globales y hooks pueden usarse en cualquier parte de la app sin duplicar código.

3. **Fácil de mantener**: Al tener una estructura clara, agregar nuevas pantallas o funcionalidades es sencillo siguiendo el mismo patrón.

4. **Escalable**: La arquitectura permite crecer sin problemas, agregando nuevas pantallas, servicios o contextos según sea necesario.

5. **Testing friendly**: Al tener la lógica separada en hooks y services, es más fácil escribir tests unitarios.

6. **Colaboración en equipo**: La estructura predecible permite que varios desarrolladores trabajen en paralelo sin conflictos.

## Tecnologías Utilizadas

- React Native 0.83
- React Navigation 7
- TypeScript
- AsyncStorage
