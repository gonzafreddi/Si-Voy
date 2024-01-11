/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */

import PrimeraParte from '../../components/Primera parte/PrimeraParte';
import SegundaParte from '../../components/Segunda Parte/SegundaParte';
import TerceraParte from '../../components/TerceraParte/TerceraParte';
import CuartaParte from '../../components/CuartaParte/CuartaParte';
import QuintaParte from '../../components/QuintaParte/QuintaParte';
export default function Home(){
    return(
        <div>
        <PrimeraParte />
        <SegundaParte />
        <TerceraParte />
        <CuartaParte />
        <QuintaParte /> 
        </div>
        );
}
