export const COLORS = {
    // === AZULES PRIMARIOS ===
    primary: '#0066FF',        // Azul principal vibrante
    secondary: '#004ACC',      // Azul más oscuro
    tertiary: '#003399',       // Azul profundo
    
    // === AZULES CLAROS (para fondos, estados hover, etc.) ===
    blue_light: '#4D94FF',     // Azul claro
    blue_lighter: '#80B3FF',   // Azul muy claro
    blue_lightest: '#CCE0FF',  // Azul casi blanco (backgrounds suaves)
    blue_pale: '#E6F0FF',      // Azul pálido (fondos muy sutiles)
    
    // === AZULES OSCUROS (para estados pressed, variantes) ===
    blue_dark: '#0052CC',      // Azul oscuro
    blue_darker: '#003D99',    // Azul más oscuro
    blue_darkest: '#002966',   // Azul muy oscuro (casi navy)
    blue_navy: '#001A4D',      // Navy profundo
    
    // === COLORES PARA BOTONES ===
    button_primary: '#0066FF',          // Botón principal
    button_primary_pressed: '#0052CC',  // Botón principal presionado
    button_primary_disabled: '#80B3FF', // Botón principal deshabilitado
    button_secondary: '#E6F0FF',        // Botón secundario (outline)
    button_secondary_pressed: '#CCE0FF',// Botón secundario presionado
    
    // === COLORES PARA TEXTO ===
    text_primary: '#001A4D',      // Texto principal (oscuro)
    text_secondary: '#003D99',    // Texto secundario
    text_muted: '#4D94FF',        // Texto atenuado
    text_on_primary: '#FFFFFF',   // Texto sobre botones azules
    text_link: '#0066FF',         // Enlaces
    text_link_pressed: '#0052CC', // Enlaces presionados
    
    // === ESTADOS Y UTILIDADES ===
    border_primary: '#0066FF',    // Bordes principales
    border_light: '#CCE0FF',      // Bordes sutiles
    background_primary: '#D3D3D3', // Fondo principal
    background_secondary: '#E6F0FF', // Fondo secundario azulado
    input_background: '#D3D3D3', // Fondo de inputs
    gray: '#E6F0FF',
    // === COLORES DE APOYO (para errores, éxito, etc.) ===
    error: '#DC3545',
    success: '#28A745',
    warning: '#FFC107',
    white: '#FFFFFF',
  };
  
export type Colors = typeof COLORS;

