import foto from '../assets/foto.jpg'
import styles from './Bio.module.css'
import { useState } from 'react';
export default function Bio(){

     const [lang, setLang] = useState('GR');

     const contentGreek =   
        <div className={styles.content}>
           <h3 style={{textAlign: "center"}}> Λίγα λόγια για μένα</h3>
           <p>  Ονομάζομαι Εμμανουήλ Αντωνίου Μηλιαράς και είμαι αυτοδίδακτος ζωγράφος.</p>
           <p> Κατάγομαι από το χωριό Κάτω Βιάννος,
              ένα πολύ μικρό χωριό στο Δήμο Βιάννου νότια στο νομό Ηρακλείου. Τέλειωσα την πρωτοβάθμια και δευτεροβάθμια εκπαίδευσή μου στην Άνω Βιάννο
              και στη συνέχεια σπούδασα στο Πανεπιστήμιο Κρήτης, στο τμήμα Εφαρμοσμένων Μαθηματικών. </p> 
           <p>  Η ζωγραφική ήταν ανέκαθεν ο κυριότερος τρόπος έκφρασης των συναισθημάτων μου από πολύ μικρή ηλικία.
              Από μολύβια, ξυλομπογιές λάδια και ακρυλικά έως τα μαλακά παστέλ που χρησιμοποιώ από το 2018 έχω δοκιμάσει σχεδόν όλα τα υλικά.
              Τα παστέλ είναι το υλικό που δίνει την περισσότερη ελευθερία και χρησιμοποιώ σχεδόν αποκλειστικά τα τελευταία χρόνια.</p>            
          <p> Ζωγραφίζω κυρίως τοπία και σπανίως πορτρέτα ανθρώπων ή και ζώων. Αντλώ την έμπνευσή μου από τα τοπία της περιοχής που μεγάλωσα και την ευρύτερη περιοχή της Κρήτης.
              Πηγή έμπνευσης μπορεί να αποτελέσει όμως κι ένα ποίημα, ένα τραγούδι ή ένα πρόσωπο και σίγουρα η φαντασία μου. </p>             
          <p>  Έχω συμμετάσχει σε μία ομαδική έκθεση των υπαλλήλων της Περιφέρειας Κρήτης τον Απρίλιο του 2023 και ελπίζω να ακολουθήσουν κι άλλες.</p>          
          <p>    Ευχαριστώ που επισκέφτηκες την ιστοσελίδα μου.  </p>           
        </div>
     const contentEn =       
        <div className={styles.content}>
        <h3 style={{textAlign: "center"}}> Some words for me</h3>
        <p> My name is Emmanuel Antoniou Miliaras and I am a self-taught painter.</p>
        <p>   I come from the village of Kato Viannos, a very small village in the Municipality of Viannos in the south of the prefecture of Heraklion.
              I completed my primary and secondary education in Ano Viannos and then studied at the University of Crete, in the department of Applied Mathematics.</p>            
         <p>    Painting has always been the main way of expressing my emotions from a very young age.</p>
        <p> From pencils, crayons, oils and acrylics to the soft pastels that I have been using since 2018, I have tried almost all the materials. Pastels are the material that gives the most freedom and I have been using them almost exclusively in recent years.
            I mainly paint landscapes and rarely portraits of people or animals. 
            I draw my inspiration from the landscapes of the area where I grew up and the wider region of Crete.
             A source of inspiration can also be a poem, a song or a person and certainly my imagination. </p>       
        <p> I have participated in a group exhibition of employees of the Region of Crete in April 2023 and I hope that others will follow.</p>           
         <p>  Thank you for visiting my website. </p>           
                          </div>                  
    let content;
    if (lang === 'GR'){
        content = contentEn;
    } else if (lang === 'EN'){
        content = contentGreek;
    }
    
     function handleClick(){
        if(lang === 'GR'){
            setLang('EN');
        }
       else if(lang ==='EN'){
        setLang('GR');
       }
     }                     
    return(
        
        <div className={styles.bio}>
            <img src={foto} alt="A foto of Emmanouil Miliaras" />
            <button onClick={handleClick}>{lang}</button>
            {content}
        </div>
    );
}

