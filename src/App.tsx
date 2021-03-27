import { useEffect, useState } from 'react'

import { SideBar } from './components/SideBar'
import { Content } from './components/Content'

import { MovieProps, GenreResponseProps } from './@types/custom'

import './styles/global.scss'

import './styles/sidebar.scss'
import './styles/content.scss'

export function App() {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  )

  useEffect(() => {
    document.title = `Filmes de ${selectedGenre.title} - WatchMe`
  }, [selectedGenre])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar setMovies={setMovies} setSelectedGenre={setSelectedGenre} />
      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  )
}
