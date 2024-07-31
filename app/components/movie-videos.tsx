import styles from '../../styles/movie-videos.module.css';

import { stringify } from 'querystring';
import { API_URL } from '../(home)/page';

async function getVideo(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} title={video.name} allow=""></iframe>
      ))}
    </div>
  );
}
