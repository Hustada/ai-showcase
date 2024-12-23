import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Paper,
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Skill items with icons
  const skills = [
    { name: 'AI/ML', level: 90, icon: '🤖' },
    { name: 'React/TypeScript', level: 85, icon: '⚛️' },
    { name: 'Python/TensorFlow', level: 80, icon: '🐍' },
    { name: 'Full Stack Dev', level: 85, icon: '🚀' },
  ];

  return (
    <Box 
      sx={{ 
        backgroundColor: 'background.paper',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: 'secondary.main',
        }
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: 10, 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Grid 
          container 
          spacing={4} 
          alignItems="center"
        >
          {/* Profile Image Column */}
          <Grid 
            item 
            xs={12} 
            md={5} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.8,
                  ease: "easeInOut"
                }
              }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  width: { xs: 250, md: 280 },
                  height: { xs: 250, md: 280 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  border: '4px solid',
                  borderColor: 'secondary.main',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <img 
                  src="/assets/brand/profile.jpg" 
                  alt="Victor Profile" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* About Text Column */}
          <Grid 
            item 
            xs={12} 
            md={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              pl: { md: 4 }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8,
                  ease: "easeInOut"
                }
              }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 3 
                }}
              >
                About Me
              </Typography>

              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.6,
                  mb: 2 
                }}
              >
                I'm a passionate AI and web development professional dedicated to creating innovative digital solutions. 
                With a deep understanding of cutting-edge technologies, I transform complex ideas into elegant, functional experiences.
              </Typography>

              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.6 
                }}
              >
                My approach combines technical expertise with creative problem-solving, 
                ensuring that every project not only meets but exceeds expectations.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Section Separator */}
        <Box sx={{ height: '2px', backgroundColor: 'secondary.main', my: 6 }} />

        {/* Skills Section */}
        <Box sx={{ mt: 6 }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  mb: 2,
                  backgroundColor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    {skill.icon}
                  </Typography>
                  <Typography variant="h6">
                    {skill.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '4px',
                    backgroundColor: 'background.paper',
                    borderRadius: 1,
                    position: 'relative',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{
                      height: '100%',
                      backgroundColor: '#D35400',
                      borderRadius: 4,
                    }}
                  />
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
