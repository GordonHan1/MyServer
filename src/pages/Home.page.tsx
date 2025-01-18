import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle.js';
import { Welcome } from '../components/Welcome/Welcome.js';
import { NewWelcome } from '@/components/NewWelcome/Welcome.js';
import { Model } from '../components/3DModel/Model.js';
import classes from './homepage.module.css'
export function HomePage() {
  return (
    <>
    <div className={classes.homepage}>
    <NewWelcome/>
    <div className={classes.modelScreen}>
      <Model/>
    </div>
    </div>
     {/* <Welcome />
      <ColorSchemeToggle />*/}
    </>
  );
}
