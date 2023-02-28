import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function ModalButton({
  editText,
  modalOpen,
  editTextHandler,
  editHandler,
  modalOpenHandler,
}: {
  editText: string;
  modalOpen: boolean;
  editTextHandler: (value: string) => void;
  editHandler: () => void;
  modalOpenHandler: (value: boolean) => void;
}) {
  return (
    <Modal transparent={true} visible={modalOpen} animationType={'slide'}>
      <View style={modal.centeredView}>
        <Text style={modal.title}>Enter new text</Text>
        <TextInput
          style={modal.input}
          value={editText}
          onChangeText={editTextHandler}
        />
        <View style={modal.conButtons}>
          <TouchableOpacity onPress={editHandler}>
            <Text style={modal.button}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => modalOpenHandler(false)}>
            <Text style={modal.button}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const modal = StyleSheet.create({
  input: {
    width: '90%',
    height: 40,
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 10,
    borderColor: 'whitesmoke',
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 18,
    color: 'whitesmoke',
    backgroundColor: '#2C394B',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.700);',
  },
  title: {
    fontSize: 28,
    color: 'whitesmoke',
  },
  conButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
  button: {
    width: 100,
    height: 36,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    color: 'white',
    backgroundColor: 'rgb(8, 8, 179)',
  },
});
