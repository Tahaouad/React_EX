
    export const addAction=(salarie)=>{
        return{
            type:'add',
            payload:salarie}
    }   
    export const deleteAction=(matricule)=>{
        return{
            type : 'delete',
            payload : matricule
        }
    }
    export const editAction=(salarie)=>{
        return{
            type : 'edit',
            payload : salarie
        }
    }

