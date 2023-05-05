import { styled } from '@/stitches.config'

export const Container = styled('div', {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})

export const Content = styled('div', {
  margin: '2rem 0'
})

export const SocialButtonIcon = styled('button', {
  padding: '1rem 2rem',
  border: '1px solid $border',
  borderRadius: '$default',
  width: '100%',
  '&:hover': {
    background: '$foreground'
  },

  '@table-min': {
    width: 'max-content'
  }
})