import '@/styles/Background.css';
import ModelViewer from '@/components/ModelViewer';
// import { withBase } from '@/utils/functionsTs';
// const url = withBase('/assets/CarbonFibre/glTF/CarbonFibre.gltf');

const url = './assets/DamagedHelmet/glTF/DamagedHelmet.gltf';

export const Background = () => {
  return (
    <div className='background-effect'>
      <ModelViewer
        url={url}
        width='1000px'
        height='1000px'
        defaultZoom={1}
        minZoomDistance={3}
        maxZoomDistance={100}
        enableManualRotation={true}
        enableManualZoom={true}
        ambientIntensity={0.5}
        keyLightIntensity={1}
        fillLightIntensity={0.6}
        rimLightIntensity={0.9}
        environmentPreset='studio'
        autoRotate={true}
        autoRotateSpeed={0.5}
        onModelLoaded={() => console.log('Modelo cargado')}
      />
    </div>
  );
};
