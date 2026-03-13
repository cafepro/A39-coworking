# Almacén 39 Coworking

Web oficial del espacio de coworking **Almacén 39**, ubicado en Gijón, Asturias.

## Tecnologías

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/) para animaciones
- [Web3Forms](https://web3forms.com/) para el formulario de contacto

## Arrancar en local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La web estará disponible en `http://localhost:8080`.

## Variables de entorno

Crea un fichero `.env.local` en la raíz del proyecto con las siguientes variables:

```
VITE_WEB3FORMS_KEY=tu_api_key_aqui
```

La API key de Web3Forms se obtiene en [web3forms.com](https://web3forms.com) introduciendo el correo al que quieres recibir los mensajes del formulario de contacto.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualizar el build de producción en local |
| `npm run lint` | Ejecutar ESLint |
