"use client"

import { useEffect } from 'react'
import { getAssetPath } from '@/utils/assetPath'

export default function FontLoader() {
  useEffect(() => {
    // Dynamically set the font URL based on environment
    const fontUrl = getAssetPath('/P22 Art Nouveau Bistro Regular.ttf')
    
    // Create a new style element
    const style = document.createElement('style')
    style.textContent = `
      @font-face {
        font-family: 'P22ArtNouveau';
        src: url('${fontUrl}') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `
    
    // Remove any existing font style
    const existingStyle = document.getElementById('dynamic-font-style')
    if (existingStyle) {
      existingStyle.remove()
    }
    
    // Add the new style
    style.id = 'dynamic-font-style'
    document.head.appendChild(style)
  }, [])

  return null
} 