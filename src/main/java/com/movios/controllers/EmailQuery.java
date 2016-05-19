package com.movios.controllers;

import javax.ejb.Stateless;
import org.hibernate.jpa.HibernateQuery;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.List;

@Stateless
public class EmailQuery implements EmailDao {


    @PersistenceContext
    @Autowired
    private EntityManager entityManager;

    public void loadEmail() {

        Query query = (Query) entityManager.createNativeQuery("SELECT u.email From users AS u");
        HibernateQuery hibernateQuery = (HibernateQuery)query;
        List<Object[]> users = (List<Object[]>) query.getResultList();

        for (Object[] u : users) {
            System.out.println(u[0]);
        }
    }
}
