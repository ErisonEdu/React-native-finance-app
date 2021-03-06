import React from 'react';

import {Container, Title, Amount, Body, Category, CategoryIcon, CategoryName, Date} from './styles';

interface Category {
    iconName: string
    name: string
}

export interface TransactionCardProps {
    type: 'positive' | 'negative'
    title: string
    amount: string
    category: Category
    date: string
}

interface Props {
    data: TransactionCardProps
}

export function TransactionCard({data} : Props){
    return(
        <Container>
            <Title>{data.title}</Title>
            <Amount type={data.type}>
                {data.type === 'negative' ? '- ': '+ '}
                {data.amount}
            </Amount>
            <Body>
                <Category>
                    <CategoryIcon name={data.category.iconName}/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Body>
        </Container>
    )
}