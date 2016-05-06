package com.movios.models;

import java.io.Serializable;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Table(name = "wish_lists")
@SuppressWarnings("serial")
@Entity
public class MovieWishListModel implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private UserModel userModel;

	private ArrayList<String> movie_wish_list;

	public ArrayList<String> getMovie_wish_list() {
		return movie_wish_list;
	}

	public UserModel getUserModel() {
		return userModel;
	}

	public void setUserModel(UserModel userModel) {
		this.userModel = userModel;
	}

	public Long getId() {
		return id;
	}

	public void setMovie_wish_list(ArrayList<String> movie_wish_list) {
		this.movie_wish_list = movie_wish_list;
	}

}