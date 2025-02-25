import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function LoadVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };


  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0.0001 }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          position: 'absolute',

        }}
      >
        <video
          ref={videoRef}
          src="https://github.com/user-attachments/assets/e82835d1-ba82-4180-b34e-a51755367df0"
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '2rem',
          textAlign: 'center'
        }}
      >
        <TypeAnimation
          sequence={[
            'FNK ',
            1200,
            '99',
            1000,
            'records',
            1000,


          ]}
          wrapper="h1"
          speed={50}
          repeat={0}
        />
      </motion.div>
    </div>
  );
}