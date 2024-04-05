import { Text, View } from "react-native"

const Navbar = () => {
  return (
    <View style={{flex:1, backgroundColor:'#000', paddingTop:60, paddingHorizontal: 20, paddingBottom:30, display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems: "center",}}>
        <Text style={{color:'#fff', fontSize:17, fontWeight:'bold'}}>Navbar</Text>
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:20}}>
        <Text style={{color:'#fff', fontSize:13, fontWeight:'bold'}}>Home</Text>
        <Text style={{color:'#fff', fontSize:13, fontWeight:'bold'}}>About</Text>
        </View>
    </View>
  )
}

export default Navbar