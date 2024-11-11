export default function FormatValue(Value){
   return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
   }).format(Value)
}