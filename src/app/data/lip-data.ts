import { LipCardProps } from '../components/LipCard';

export interface LipPageData {
  mainTitle: string;
  mainImage: string;
  cards: LipCardProps[];
}

export const lipPageData: LipPageData = {
  mainTitle: 'Ajaktöltés',
  mainImage: '/lip/lip-main.jpg',
  cards: [
    {
      title: 'Ajaktöltés',
      image: '/lip/lip-small.jpg',
      paragraphs: [
        'Az ajaktöltés célja az ajkak teltebbé, feszesebbé tétele és a szebb forma és kontúr elérése a természetes hatás megőrzése mellett. Minden nő álma, hogy telt és ápolt ajkakkal rendelkezzen.',
        'Az esztétikai bőrgyógyászatban manapság alkalmazott modern hyaluronsavas töltőanyagok, baktériumok által biológiai fermentációval előállított, különféle keresztkötéseket tartalmazó, nagy tisztaságú, különböző sűrűségű, „keménységű”, steril fecskendőbe töltött készítmények. Mivel nem állati eredetűek, allergiás reakcióra nem kell számítani. Az úgynevezett dermális töltőanyagok használatával nem csak az ajkak volumene, hanem a formája is alakítható. Az ajkak végleges, kívánt formáját nem feltétlen azonnal érjük el, hanem fokozatosan – a páciens igényeinek megfelelően növelve a hatóanyagot.',
        'Mennyi töltőanyag kell? Általában 1 ml töltőanyagot injekciózunk egy alkalommal, ez elegendő ahhoz is, hogy a formán változtassunk, illetve ahhoz is, hogy volumenizáljuk az ajkakat. Aki viszont extrém dúsításra vágyik, 2-3 hét múlva további 0,5- 1 ml hyaluronsavat is kaphat. A 0,5 ml-es dózisok általában csak hidratálásra, jelzett nagyobbításra vagy korrekcióra alkalmasak, jelentős volumenizálásra nem elegendő 0,5 ml injekció. A hyaluronsavas ajaktöltést helyi érzéstelenítéssel végezzük.',
        // 'A kezelés egyik legfontosabb előnye, hogy visszafordítható. Ha nem elégedett az eredménnyel, vissza tudjuk állítani a korábbi állapotot. A hyaluronsav alapú töltőanyagok biológiailag lebomlóak, ami azt jelenti, hogy a gél fokozatosan lebomlik és eltűnik – ezt a folyamatot fel tudjuk gyorsítani, ha szükséges.',
        // 'Azonnali eredmény, tartós hatás A kezelést követően nincs lábadozás, és az eredmény azonnal látható. Habár a feltöltés után mellékhatásként kismértékű duzzadás, bőrpír, bevérzés tapasztalható, de ezek 3-4 nap alatt teljesen megszűnnek. Előnye, hogy a páciens a kezelést követően a mindennapi életviteléhez is azonnal visszatérhet. A végleges eredmény pedig körülbelül 2 hét elteltével látható. Amennyiben a páciens nem elégedett a kapott eredménnyel, akkor lehetőség van akár az azonnali eltávolításra (hialuronidáz segítségével). Ha további feltöltésre nem kerül sor, akkor a töltőanyag nyomtalanul felszívódik az ajakból – az utolsó töltést követő 6-9 hónap múlva.',
        // 'A kezelést minden esetben egy konzultáció előzi meg, amelynek célja az elképzelések és az esztétikus megoldások összehangolása. A konzultáción az ajakfeltöltés menetének ismertetése mellett tisztázásra kerülnek a páciens igényei, és lehetőségei egyaránt.',
      ],
    },
    {
      title: 'Kezelés',
      image: '/lip/syringe.jpg',
      paragraphs: [
        // 'Az ajaktöltés célja az ajkak teltebbé, feszesebbé tétele és a szebb forma és kontúr elérése a természetes hatás megőrzése mellett. Minden nő álma, hogy telt és ápolt ajkakkal rendelkezzen.',
        // 'Az esztétikai bőrgyógyászatban manapság alkalmazott modern hyaluronsavas töltőanyagok, baktériumok által biológiai fermentációval előállított, különféle keresztkötéseket tartalmazó, nagy tisztaságú, különböző sűrűségű, „keménységű”, steril fecskendőbe töltött készítmények. Mivel nem állati eredetűek, allergiás reakcióra nem kell számítani. Az úgynevezett dermális töltőanyagok használatával nem csak az ajkak volumene, hanem a formája is alakítható. Az ajkak végleges, kívánt formáját nem feltétlen azonnal érjük el, hanem fokozatosan – a páciens igényeinek megfelelően növelve a hatóanyagot.',
        // 'Mennyi töltőanyag kell? Általában 1 ml töltőanyagot injekciózunk egy alkalommal, ez elegendő ahhoz is, hogy a formán változtassunk, illetve ahhoz is, hogy volumenizáljuk az ajkakat. Aki viszont extrém dúsításra vágyik, 2-3 hét múlva további 0,5- 1 ml hyaluronsavat is kaphat. A 0,5 ml-es dózisok általában csak hidratálásra, jelzett nagyobbításra vagy korrekcióra alkalmasak, jelentős volumenizálásra nem elegendő 0,5 ml injekció. A hyaluronsavas ajaktöltést helyi érzéstelenítéssel végezzük.',
        'A kezelés egyik legfontosabb előnye, hogy visszafordítható. Ha nem elégedett az eredménnyel, vissza tudjuk állítani a korábbi állapotot. A hyaluronsav alapú töltőanyagok biológiailag lebomlóak, ami azt jelenti, hogy a gél fokozatosan lebomlik és eltűnik – ezt a folyamatot fel tudjuk gyorsítani, ha szükséges.',
        'Azonnali eredmény, tartós hatás A kezelést követően nincs lábadozás, és az eredmény azonnal látható. Habár a feltöltés után mellékhatásként kismértékű duzzadás, bőrpír, bevérzés tapasztalható, de ezek 3-4 nap alatt teljesen megszűnnek. Előnye, hogy a páciens a kezelést követően a mindennapi életviteléhez is azonnal visszatérhet. A végleges eredmény pedig körülbelül 2 hét elteltével látható. Amennyiben a páciens nem elégedett a kapott eredménnyel, akkor lehetőség van akár az azonnali eltávolításra (hialuronidáz segítségével). Ha további feltöltésre nem kerül sor, akkor a töltőanyag nyomtalanul felszívódik az ajakból – az utolsó töltést követő 6-9 hónap múlva.',
        'A kezelést minden esetben egy konzultáció előzi meg, amelynek célja az elképzelések és az esztétikus megoldások összehangolása. A konzultáción az ajakfeltöltés menetének ismertetése mellett tisztázásra kerülnek a páciens igényei, és lehetőségei egyaránt.',
      ],
    },
  ],
};
