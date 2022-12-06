import { db } from '../utils/firebaseConfig';
import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore"; 

export const firebaseFetch = async(categoryId) => {
    let q
    if (categoryId === undefined) {
        q = query(collection(db, "products"))
    } else {
        q = query(collection(db, "products"), where('category_name','==', categoryId))
    }
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }))
}

export const firebaseFetchOne = async(itemId) => {
    const docRef = doc(db,'products',itemId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists) {
        console.log('No such document!');
    } else {
        return {
            id: itemId,
            ...docSnap.data()
        }
    }
    
}


