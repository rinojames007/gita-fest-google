import React from 'react';
import Particles from 'tsparticles';
import particlesConfig from './config/particle-config';


export default function ParticleBackground() {
    return (
        <Particles params={particlesConfig} />
    );
}