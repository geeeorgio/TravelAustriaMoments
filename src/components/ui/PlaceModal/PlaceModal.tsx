import React from 'react';
import { Modal, Pressable, TouchableOpacity } from 'react-native';

import ArrowIcon from '../CustomIcons/ArrowIcon';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

interface PlaceModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const PlaceModal = ({ visible, onClose, children }: PlaceModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <ArrowIcon color={COLORS.white} width={wp(20)} height={wp(20)} />
        </TouchableOpacity>

        <Pressable style={styles.content} onPress={(e) => e.stopPropagation()}>
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default PlaceModal;
