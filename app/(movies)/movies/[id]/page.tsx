import { API_URL } from '../../../(home)/page';

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideo(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MoviDetail({ params: { id } }: { params: { id: string } }) {
  const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
  return (
    <div>
      <h1>Movie Detail {movie.title}</h1>
    </div>
  );
}
