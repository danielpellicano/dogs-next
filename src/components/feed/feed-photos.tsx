import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";
import styles from './feed.module.css';

export default function FeedPhotos({photos} : {photos: Photo[]}) {
    console.log(photos)
    return ( 
      <section> 
        <h1>Feed</h1>
        <ul className={styles.feed}>
            {photos.map((photo, i) => (
            <li key={photo.id + i} className={styles.photo}>
                <Link href={`/foto/${photo.id}`} scroll={false}>
                    <Image src={photo.src} alt={photo.title} width={1500} height={1500} sizes="80vh"/>
                    <span className={styles.visualizacao}>{photo.acessos}</span>
                </Link>
                </li>
            ))}
        </ul>
      </section>
    );
  }
  