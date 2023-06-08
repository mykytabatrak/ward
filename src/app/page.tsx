import * as React from 'react';
import { Gallery } from '@/ui/basic/gallery';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1685987300287-6c1dc4d0508e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
    width: 5184,
    height: 3456,
  },
  {
    src: 'https://images.unsplash.com/photo-1673632156153-d3baf0d0401b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    width: 2832,
    height: 4248,
  },
  {
    src: 'https://images.unsplash.com/photo-1568231407122-a56e9e9c0a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    width: 6000,
    height: 4000,
  },
  {
    src: 'https://images.unsplash.com/photo-1684523311553-117123e138ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80',
    width: 6177,
    height: 3469,
  },
  // {
  //   src: 'https://images.unsplash.com/photo-1685685068235-2bc6942c6af5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=991&q=80',
  //   width: 6752,
  //   height: 10032,
  // },
  // {
  //   src: 'https://images.unsplash.com/photo-1685948595028-3c5023244556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  //   width: 5633,
  //   height: 3755,
  // },
];

export default function Home() {
  return (
    <article className="article">
      <header className="article__header">
        <h1 className="article__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h1>
        <p className="article__subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
          assumenda aspernatur eaque aliquam molestiae adipisci dolor
        </p>
        <hr className="article__header-divider" />
      </header>
      <div className="article__body">
        <p className="article__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero esse,
          pariatur consectetur dignissimos aliquam molestiae adipisci dolor
          consequatur fuga autem laboriosam quas repudiandae nobis. Explicabo
          dolores amet sapiente, similique nam modi id eius itaque reprehenderit
          cupiditate quos? Quis esse explicabo necessitatibus blanditiis modi
          ea, a maiores, facere atque dignissimos unde harum. Beatae
          voluptatibus quibusdam harum minima dicta deserunt facilis inventore
          sit id, obcaecati in saepe? Tempore vitae hic, in laudantium atque
          provident alias perspiciatis dolore voluptatem, repellendus distinctio
          obcaecati labore. Aliquam deleniti voluptas provident facilis placeat
          laborum exercitationem maiores sapiente autem reprehenderit sed
          voluptatum, voluptatibus culpa doloribus expedita error totam dicta
          eum laboriosam molestiae officia.
        </p>
        <Gallery images={images} />
        <p className="article__paragraph">
          Sint est provident obcaecati aliquam. Reiciendis iste nihil cum nisi
          velit expedita neque dolorum ex, optio esse culpa architecto rem sed
          quasi officiis omnis! Id ut quaerat iure saepe. Rem placeat
          consequatur voluptates animi deleniti, saepe eos. Pariatur, officia
          itaque labore adipisci rerum praesentium eius mollitia. Expedita vitae
          obcaecati dolorum delectus quas minima necessitatibus est commodi
          mollitia quibusdam fugiat illum nesciunt omnis iste aspernatur eos
          atque dolores architecto, labore laudantium sunt corporis placeat.
          Deleniti magni vero, atque fuga mollitia dicta blanditiis. Maxime
          laborum totam maiores quos voluptas molestiae earum odio, mollitia,
          tempore nemo sequi quisquam.
        </p>
      </div>
    </article>
  );
}
