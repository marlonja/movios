package com.movios.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.movios.models.ModelExceptions.InvaldPasswordException;

@Table(name = "users")
@SuppressWarnings("serial")
@Entity
public class UserModel implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@OneToMany(mappedBy = "userModel", cascade = CascadeType.ALL)
	private List<MovieWishListModel> wishListModels = new ArrayList<MovieWishListModel>();

	private String first_name;
	private String last_name;
	private String user_name;
	private String password;
	private String social_security;
	private String user_type;
	private String email;
	private String age;
	private String zip_code;
	private String city;

	// START OF SETTERS AND GETTERS

	public List<MovieWishListModel> getWishListModels() {
		return wishListModels;
	}

	public void setWishListModels(List<MovieWishListModel> wishListModels) {
		this.wishListModels = wishListModels;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getPassword() {
		return password;
	}

	////////// passwordValidation ////////////
	public void setPassword(String password) {
		passwordValidation();
		this.password = password;
	}

	public String getSocial_security() {
		return social_security;
	}

	public void setSocial_security(String social_security) {
		this.social_security = social_security;
	}

	public String getUser_type() {
		return user_type;
	}

	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getZip_code() {
		return zip_code;
	}

	public void setZip_code(String zip_code) {
		this.zip_code = zip_code;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Long getId() {
		return id;
	}

	// END OF SETTERS AND GETTERS

	private boolean passwordLengthShorterThanSix() {

		boolean ShorterThanSix = password.length() < 6;

		return ShorterThanSix;
	}

	private boolean passwordLengthLongerThanTwenty() {

		boolean LongerThanTwenty = password.length() > 20;

		return LongerThanTwenty;
	}

	private boolean passwordContainsInvalidCharacter() {

		// \\w = [a-zA-Z_0-9]
		boolean hasInvalidCharacters = Pattern.matches("[\\w[_-]]+", password);

		return !hasInvalidCharacters;
	}

	private void passwordValidation() {
		boolean passwordHasFailed = false;
		StringBuilder passwordMessageBuilder = new StringBuilder();

		if (passwordLengthShorterThanSix()) {
			passwordHasFailed = true;
			passwordMessageBuilder.append("Password shorter than 6\n");
		} else if (passwordLengthLongerThanTwenty()) {
			passwordHasFailed = true;
			passwordMessageBuilder.append("Password longer than 20\n");
		}

		if (passwordContainsInvalidCharacter()) {
			passwordHasFailed = true;
			passwordMessageBuilder.append("Password contains invalid characters\n");
		}

		if (passwordHasFailed) {
			try {
				throw new InvaldPasswordException(passwordMessageBuilder.toString());
			} catch (InvaldPasswordException e) {
				System.out.println(e.toString());
			}
		}

		// if nothing fails
		return;
	}
}
