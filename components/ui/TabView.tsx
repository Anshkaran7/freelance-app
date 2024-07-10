// components/TabViewComponent.tsx
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const initialLayout = { width: Dimensions.get('window').width };

const TabViewComponent = ({ index, setIndex, routes, renderScene }: { index: number, setIndex: (index: number) => void, routes: Array<any>, renderScene: (props: any) => React.ReactNode }) => {
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    indicatorStyle={styles.indicator}
                    style={styles.tabBar}
                    renderLabel={({ route, focused }) => (
                        <Text style={[styles.label, focused ? styles.labelFocused : null]}>
                            {route.title}
                        </Text>
                    )}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0,
    },
    indicator: {
        backgroundColor: '#FF5D01',
        height: 3,
    },
    label: {
        fontSize: 14,
        fontFamily: 'WorkSans_SemiBold',
        color: '#888',
    },
    labelFocused: {
        color: '#FF5D01',
    },
});

export default TabViewComponent;
