import { connect, useDispatch, useSelector } from "react-redux";
import { Text, View, Button, FlatList } from 'react-native';
import { increase, decrease, reset } from '../redux/actions/index';
import { fetchApi } from '../redux/actions';
import { useEffect } from "react";


function SizeApp({
    size, increase, decrease, reset, fetchApi
}) {
    const fetchData = () => {
        const url = 'https://api.opensea.io/api/v1/assets?format=json';
        const data = fetch(url).then((x) => x.json()).then((json)=>dispatch(fetchApi(json.assets))).catch((err)=>console.log(err));
    }
    const dispatch = useDispatch();
    useEffect(() => { fetchData(); }, []);
    const data = useSelector(state => state.data);
    {
        return (
            <View>
                <Button title="Increase Image Size" onPress={() => increase(2)} />
                <Button title="Decrease Image Size" onPress={() => decrease(2)} />
                <Button title="Reset Image Size" onPress={() => reset()} />
                <Text>{size}</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{ border: '1px solid red', padding: 5, margin: 5 }}>
                            <Text>{item.id}</Text>
                            <Text>{item.name}</Text>
                            <Image
                                source={{ uri: item.image_thumbnail_url }}
                                style={{ width: {size}, height: {size} }}
                            />
                        </View>
                    )}
                />
            </View>
        )
    }

    
};

const mapDispatchToProps = { increase, decrease, reset, fetchApi };
    const mapStateToProps = (state) => ({
        size: state.sizeReducer.size
    })
export default connect(mapStateToProps, mapDispatchToProps)(SizeApp);