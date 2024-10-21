import { TamaguiProvider, Stack, Button, H1, H2, H3, Paragraph, YStack } from 'tamagui';
import tamaguiConfig from './tamagui.config';
import './App.css';
import './assets/fonts/fonts.css'; // Import the fonts.css file
import leveluplogo1 from '../src/assets/leveluplogo1.png';
import ParticlesBackground from './ParticlesBackground.tsx';

function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <YStack
        style={{
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
          backgroundColor: '#000000', // Set a background color to ensure contrast with white text
        }}
      >
        {/* Particle Background */}
        <ParticlesBackground  />

        {/* Main Content */}
        <Stack
          style={{
            marginTop: '70px',
            padding: '20px',
            position: 'relative',
            zIndex: 2,
            color: '#FFFFFF',
          }}
        >
          <YStack alignItems="center">
            <img src={leveluplogo1} className="logo" alt="Project logo" />
            <H1 style={{ fontFamily: 'Paladins Laser', color: '#FFFFFF' }}>
              Welcome to My Open Source Project
            </H1>
          </YStack>

          <YStack alignItems="center" space="$2">
            <H2 style={{ fontFamily: 'Paladins Laser', color: '#FFFFFF' }}>
              Launching Soon!
            </H2>
            <H3 style={{ fontFamily: 'Paladins Laser', color: '#FFFFFF' }}>
              June 2025
            </H3>

            <Paragraph style={{ fontFamily: 'Paladins', color: '#FFFFFF' }}>
              We are excited to announce the upcoming release of our open-source project.
              Stay tuned for more updates, and follow us to get notified when we go live!
            </Paragraph>
            <Paragraph style={{ fontFamily: 'Paladins', color: '#FFFFFF' }}>
              This project aims to help x by providing <em> y </em> 
              and <em>z</em> for alpha.
            </Paragraph>
          </YStack>

          <YStack alignItems="center" space="$2">
            <Paragraph style={{ fontFamily: 'Paladins', color: '#FFFFFF' }}>
              Follow us on GitHub for more updates!
            </Paragraph>

            <Button
              asChild
              theme="dark"
              alignItems="center"
              style={{
                backgroundColor: '#800080', // Purple background
                borderRadius: '8px',
                padding: '10px 20px',
              }}
            >
              <a 
                href="https://github.com/npastrami/lvlupmiami?tab=readme-ov-file" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#800080', textDecoration: 'none', fontFamily: 'Paladins Laser' }}
              >
                Visit our GitHub
              </a>
            </Button>

            <Button
              asChild
              theme="dark"
              alignItems="center"
              style={{
                backgroundColor: '#800080', // Purple background
                borderRadius: '8px',
                padding: '10px 20px',
              }}
            >
              <a 
                href="mailto:npastrana15@outlook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#800080', textDecoration: 'none', fontFamily: 'Paladins Laser' }}
              >
                Email Us
              </a>
            </Button>
          </YStack>
        </Stack>
      </YStack>
    </TamaguiProvider>
  );
}

export default App;
