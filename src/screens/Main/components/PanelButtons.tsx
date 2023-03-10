import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
interface IPanelButtons {
  handleOpenRemoveM: () => void;
  closePanel: () => void;
  handleOpenEditM: () => void;
  panelBtnsOpen: boolean;
}

const PanelButtons = ({
  handleOpenRemoveM,
  closePanel,
  handleOpenEditM,
  panelBtnsOpen,
}: IPanelButtons) => {
  return (
    <View style={styles.panel}>
      <Text style={styles.item}>
        <TouchableOpacity onPress={handleOpenEditM} disabled={panelBtnsOpen}>
          <Icon name="edit" size={35} color="green" />
        </TouchableOpacity>
      </Text>
      <Text style={styles.item}>
        <TouchableOpacity onPress={closePanel} disabled={panelBtnsOpen}>
          <Icon name="cancel" size={35} color="black" />
        </TouchableOpacity>
      </Text>
      <Text style={styles.item}>
        <TouchableOpacity onPress={handleOpenRemoveM} disabled={panelBtnsOpen}>
          <Icon name="delete-forever" size={35} color="#FF0303" />
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default PanelButtons;

const styles = StyleSheet.create({
  panel: {
    width: '100%',
    height: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#393053',
  },
  item: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
});
