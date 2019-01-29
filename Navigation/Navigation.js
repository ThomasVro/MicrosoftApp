import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const SearchStackNavigator = createStackNavigator({
        Search: {
            screen: Search,
            navigationOptions: { 
                title: 'Rechercher' 
            }
        },

        FilmDetail: {
            screen: FilmDetail
        }
})

const App = createAppContainer(SearchStackNavigator)
export default App