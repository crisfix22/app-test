export interface LoadingProps {
    /** Mostrar el loading como overlay de pantalla completa */
    fullScreen?: boolean;
    /** Texto opcional a mostrar debajo del spinner */
    message?: string;
    /** Tamaño del spinner: 'small' | 'large' */
    size?: 'small' | 'large';
    /** Color personalizado del spinner (por defecto usa el color primario) */
    color?: string;
    /** Mostrar/ocultar el componente */
    visible?: boolean;
}

