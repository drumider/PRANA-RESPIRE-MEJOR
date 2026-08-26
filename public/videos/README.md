# Carpeta para Videos Educativos

La carpeta pública para almacenar los archivos de video es:
📂 `/public/videos/`

---

## 1. ¿Cómo subir archivos de video directos (.mp4, .mov, etc.)?
1. Sube tus archivos de video directamente dentro de esta carpeta (`public/videos/`).
2. Por ejemplo, si subes `video-asma.mp4`, la ruta en el código será:
   ```
   /videos/video-asma.mp4
   ```

---

## 2. ¿Dónde se configuran en el código?
Abre el archivo:
📄 **`/src/components/EducationalVideos.tsx`**

En las líneas 21 a 43 encontrarás el array `newVideos`:

```typescript
const newVideos: NewVideoItem[] = [
  {
    id: 5,
    titleEs: 'Título del Video en Español',
    titleEn: 'Video Title in English',
    url: '/videos/tu-video-5.mp4', // O URL de YouTube: 'https://www.youtube-nocookie.com/embed/CODIGO_VIDEO'
    type: 'file', // Usa 'file' si es archivo local (.mp4), o 'youtube' si es un link de YouTube
  },
  {
    id: 6,
    titleEs: 'Video Educativo 6',
    titleEn: 'Educational Video 6',
    url: '',
    type: 'youtube',
  },
  {
    id: 7,
    titleEs: 'Video Educativo 7',
    titleEn: 'Educational Video 7',
    url: '',
    type: 'youtube',
  },
];
```

