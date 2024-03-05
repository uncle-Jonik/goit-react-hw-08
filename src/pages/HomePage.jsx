import DocumentTitle from '../components/DocumentTitle';
import css from './PagesStyles.module.css';

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.profileBox}>
        <h1>My profile:</h1>
        <p>It`s still empty here, but it will be fixed in time 😉</p>
      </div>
    </>
  );
}
